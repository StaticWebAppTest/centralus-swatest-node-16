module.exports = async function (context, req) {
  const date = "2022-07-05T10:11:26.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

