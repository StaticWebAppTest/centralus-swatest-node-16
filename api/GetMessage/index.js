module.exports = async function (context, req) {
  const date = "2022-04-14T05:10:03.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

