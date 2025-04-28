module.exports = async function (context, req) {
  const date = "2025-04-28T16:15:33.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

