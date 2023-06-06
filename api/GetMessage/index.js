module.exports = async function (context, req) {
  const date = "2023-06-06T09:08:59.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

