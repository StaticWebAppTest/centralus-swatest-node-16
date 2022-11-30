module.exports = async function (context, req) {
  const date = "2022-11-30T11:08:59.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

