module.exports = async function (context, req) {
  const date = "2023-03-09T14:09:49.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

