module.exports = async function (context, req) {
  const date = "2025-06-05T17:10:09.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

