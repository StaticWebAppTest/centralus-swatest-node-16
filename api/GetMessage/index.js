module.exports = async function (context, req) {
  const date = "2024-04-05T22:09:09.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

