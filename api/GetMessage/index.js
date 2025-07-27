module.exports = async function (context, req) {
  const date = "2025-07-27T14:12:31.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

