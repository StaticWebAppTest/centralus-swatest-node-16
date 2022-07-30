module.exports = async function (context, req) {
  const date = "2022-07-30T07:09:55.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

