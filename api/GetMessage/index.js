module.exports = async function (context, req) {
  const date = "2024-10-17T03:17:52.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

