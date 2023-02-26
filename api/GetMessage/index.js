module.exports = async function (context, req) {
  const date = "2023-02-26T03:21:22.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

