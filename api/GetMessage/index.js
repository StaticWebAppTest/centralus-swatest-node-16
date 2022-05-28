module.exports = async function (context, req) {
  const date = "2022-05-28T05:11:17.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

