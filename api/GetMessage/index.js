module.exports = async function (context, req) {
  const date = "2022-09-05T20:12:36.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

