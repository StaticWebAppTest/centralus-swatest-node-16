module.exports = async function (context, req) {
  const date = "2025-01-28T22:10:41.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

