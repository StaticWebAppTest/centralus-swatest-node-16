module.exports = async function (context, req) {
  const date = "2022-05-29T06:13:51.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

