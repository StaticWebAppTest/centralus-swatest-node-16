module.exports = async function (context, req) {
  const date = "2025-02-03T17:10:15.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

