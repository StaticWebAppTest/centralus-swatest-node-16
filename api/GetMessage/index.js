module.exports = async function (context, req) {
  const date = "2025-05-28T03:08:57.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

