module.exports = async function (context, req) {
  const date = "2022-03-06T10:11:15.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

