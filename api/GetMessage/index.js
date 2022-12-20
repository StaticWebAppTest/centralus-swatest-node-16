module.exports = async function (context, req) {
  const date = "2022-12-20T10:10:11.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

