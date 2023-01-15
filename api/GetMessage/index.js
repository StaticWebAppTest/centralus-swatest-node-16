module.exports = async function (context, req) {
  const date = "2023-01-15T05:08:35.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

