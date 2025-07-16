module.exports = async function (context, req) {
  const date = "2025-07-16T10:15:29.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

