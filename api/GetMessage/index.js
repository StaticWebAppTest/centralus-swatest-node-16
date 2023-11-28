module.exports = async function (context, req) {
  const date = "2023-11-28T03:09:43.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

