module.exports = async function (context, req) {
  const date = "2022-04-01T16:14:24.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

