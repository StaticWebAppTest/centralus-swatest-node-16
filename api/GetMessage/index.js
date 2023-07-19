module.exports = async function (context, req) {
  const date = "2023-07-19T05:08:49.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

