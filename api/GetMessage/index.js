module.exports = async function (context, req) {
  const date = "2022-04-18T05:11:17.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

