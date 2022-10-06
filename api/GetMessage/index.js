module.exports = async function (context, req) {
  const date = "2022-10-06T16:20:04.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

