module.exports = async function (context, req) {
  const date = "2022-07-12T15:11:49.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

