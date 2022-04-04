module.exports = async function (context, req) {
  const date = "2022-04-04T23:11:35.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

