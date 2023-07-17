module.exports = async function (context, req) {
  const date = "2023-07-17T23:08:55.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

