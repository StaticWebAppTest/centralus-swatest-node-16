module.exports = async function (context, req) {
  const date = "2024-12-29T03:21:21.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

