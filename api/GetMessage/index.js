module.exports = async function (context, req) {
  const date = "2025-02-20T16:15:25.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

