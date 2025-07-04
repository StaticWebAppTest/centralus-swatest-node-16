module.exports = async function (context, req) {
  const date = "2025-07-04T11:12:31.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

