module.exports = async function (context, req) {
  const date = "2022-03-13T20:11:27.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

