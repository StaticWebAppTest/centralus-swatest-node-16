module.exports = async function (context, req) {
  const date = "2022-09-17T23:11:42.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

