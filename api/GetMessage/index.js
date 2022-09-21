module.exports = async function (context, req) {
  const date = "2022-09-21T12:26:19.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

