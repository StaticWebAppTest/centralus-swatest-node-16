module.exports = async function (context, req) {
  const date = "2025-12-17T08:21:21.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

