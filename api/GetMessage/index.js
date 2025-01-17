module.exports = async function (context, req) {
  const date = "2025-01-17T16:13:25.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

