module.exports = async function (context, req) {
  const date = "2022-11-21T16:14:38.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

