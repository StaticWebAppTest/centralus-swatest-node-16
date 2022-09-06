module.exports = async function (context, req) {
  const date = "2022-09-06T10:12:38.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

