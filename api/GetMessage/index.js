module.exports = async function (context, req) {
  const date = "2022-08-29T08:15:00.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

