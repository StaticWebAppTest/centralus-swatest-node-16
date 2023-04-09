module.exports = async function (context, req) {
  const date = "2023-04-09T04:10:13.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

