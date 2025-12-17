module.exports = async function (context, req) {
  const date = "2025-12-17T11:14:05.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

