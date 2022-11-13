module.exports = async function (context, req) {
  const date = "2022-11-13T03:01:23.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

