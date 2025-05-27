module.exports = async function (context, req) {
  const date = "2025-05-27T08:18:24.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

