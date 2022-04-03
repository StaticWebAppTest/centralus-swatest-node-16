module.exports = async function (context, req) {
  const date = "2022-04-03T05:09:30.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

