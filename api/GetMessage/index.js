module.exports = async function (context, req) {
  const date = "2025-02-03T06:16:35.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

