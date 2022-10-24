module.exports = async function (context, req) {
  const date = "2022-10-24T20:14:40.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

