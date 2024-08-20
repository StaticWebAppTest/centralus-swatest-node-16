module.exports = async function (context, req) {
  const date = "2024-08-20T21:11:31.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

