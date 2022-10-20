module.exports = async function (context, req) {
  const date = "2022-10-20T01:11:55.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

