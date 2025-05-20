module.exports = async function (context, req) {
  const date = "2025-05-20T05:13:43.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

