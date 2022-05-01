module.exports = async function (context, req) {
  const date = "2022-05-01T15:11:24.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

