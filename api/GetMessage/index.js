module.exports = async function (context, req) {
  const date = "2022-08-24T20:11:49.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

