module.exports = async function (context, req) {
  const date = "2024-02-29T07:09:59.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

