module.exports = async function (context, req) {
  const date = "2022-06-05T08:13:00.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

