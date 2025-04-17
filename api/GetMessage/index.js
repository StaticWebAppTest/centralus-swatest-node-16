module.exports = async function (context, req) {
  const date = "2025-04-17T11:10:35.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

