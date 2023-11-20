module.exports = async function (context, req) {
  const date = "2023-11-20T08:13:04.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

