module.exports = async function (context, req) {
  const date = "2023-03-20T20:09:39.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

