module.exports = async function (context, req) {
  const date = "2022-09-14T19:11:32.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

