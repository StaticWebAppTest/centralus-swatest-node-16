module.exports = async function (context, req) {
  const date = "2022-10-30T15:12:00.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

