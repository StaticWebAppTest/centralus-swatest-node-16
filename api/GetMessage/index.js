module.exports = async function (context, req) {
  const date = "2022-12-12T06:13:05.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

