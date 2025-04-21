module.exports = async function (context, req) {
  const date = "2025-04-21T14:12:07.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

