module.exports = async function (context, req) {
  const date = "2022-09-03T08:13:36.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

