module.exports = async function (context, req) {
  const date = "2023-06-20T03:09:50.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

