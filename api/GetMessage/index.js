module.exports = async function (context, req) {
  const date = "2025-03-21T07:12:17.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

