module.exports = async function (context, req) {
  const date = "2022-05-01T05:16:44.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

