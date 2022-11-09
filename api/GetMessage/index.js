module.exports = async function (context, req) {
  const date = "2022-11-09T17:16:44.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

