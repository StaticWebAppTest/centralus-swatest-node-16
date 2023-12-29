module.exports = async function (context, req) {
  const date = "2023-12-29T16:12:15.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

