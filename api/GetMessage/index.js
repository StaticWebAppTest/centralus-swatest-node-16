module.exports = async function (context, req) {
  const date = "2025-02-02T17:10:01.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

