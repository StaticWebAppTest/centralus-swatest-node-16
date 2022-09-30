module.exports = async function (context, req) {
  const date = "2022-09-30T01:29:33.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

