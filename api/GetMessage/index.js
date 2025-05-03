module.exports = async function (context, req) {
  const date = "2025-05-03T21:11:15.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

