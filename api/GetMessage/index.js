module.exports = async function (context, req) {
  const date = "2022-10-06T10:16:10.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

