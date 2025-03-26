module.exports = async function (context, req) {
  const date = "2025-03-26T14:13:02.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

