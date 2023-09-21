module.exports = async function (context, req) {
  const date = "2023-09-21T02:14:43.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

