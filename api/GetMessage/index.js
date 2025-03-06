module.exports = async function (context, req) {
  const date = "2025-03-06T16:15:09.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

