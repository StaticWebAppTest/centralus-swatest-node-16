module.exports = async function (context, req) {
  const date = "2022-05-26T21:11:11.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

