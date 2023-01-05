module.exports = async function (context, req) {
  const date = "2023-01-05T09:09:42.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

