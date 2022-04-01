module.exports = async function (context, req) {
  const date = "2022-04-01T10:11:52.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

