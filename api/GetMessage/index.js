module.exports = async function (context, req) {
  const date = "2023-11-06T08:12:32.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

