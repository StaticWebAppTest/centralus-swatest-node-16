module.exports = async function (context, req) {
  const date = "2023-12-26T06:12:09.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

