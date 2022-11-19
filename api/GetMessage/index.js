module.exports = async function (context, req) {
  const date = "2022-11-19T03:36:37.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

