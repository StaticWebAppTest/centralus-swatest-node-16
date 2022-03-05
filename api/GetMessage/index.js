module.exports = async function (context, req) {
  const date = "2022-03-05T12:14:52.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

