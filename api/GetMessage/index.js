module.exports = async function (context, req) {
  const date = "2023-09-12T07:08:21.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

