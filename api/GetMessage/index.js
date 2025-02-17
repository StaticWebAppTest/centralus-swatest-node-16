module.exports = async function (context, req) {
  const date = "2025-02-17T10:13:30.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

