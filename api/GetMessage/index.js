module.exports = async function (context, req) {
  const date = "2025-02-18T16:15:03.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

