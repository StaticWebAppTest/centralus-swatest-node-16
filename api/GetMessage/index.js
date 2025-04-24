module.exports = async function (context, req) {
  const date = "2025-04-24T21:12:27.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

