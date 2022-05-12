module.exports = async function (context, req) {
  const date = "2022-05-12T04:20:31.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

