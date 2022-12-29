module.exports = async function (context, req) {
  const date = "2022-12-29T06:12:01.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

