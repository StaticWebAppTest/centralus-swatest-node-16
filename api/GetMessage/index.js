module.exports = async function (context, req) {
  const date = "2023-06-12T07:08:51.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

