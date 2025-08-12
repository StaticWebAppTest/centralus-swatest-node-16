module.exports = async function (context, req) {
  const date = "2025-08-12T11:12:33.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

