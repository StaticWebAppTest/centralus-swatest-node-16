module.exports = async function (context, req) {
  const date = "2025-04-06T17:10:14.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

