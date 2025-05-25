module.exports = async function (context, req) {
  const date = "2025-05-25T15:12:03.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

