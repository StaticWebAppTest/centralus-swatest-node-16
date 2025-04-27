module.exports = async function (context, req) {
  const date = "2025-04-27T12:22:30.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

