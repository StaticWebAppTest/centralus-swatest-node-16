module.exports = async function (context, req) {
  const date = "2024-12-06T22:11:43.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

