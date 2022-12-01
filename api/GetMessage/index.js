module.exports = async function (context, req) {
  const date = "2022-12-01T15:11:01.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

