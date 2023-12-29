module.exports = async function (context, req) {
  const date = "2023-12-29T12:14:29.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

