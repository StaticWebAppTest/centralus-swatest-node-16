module.exports = async function (context, req) {
  const date = "2025-09-25T10:13:57.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

