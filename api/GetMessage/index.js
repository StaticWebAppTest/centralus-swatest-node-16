module.exports = async function (context, req) {
  const date = "2024-04-11T20:09:26.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

