module.exports = async function (context, req) {
  const date = "2024-01-22T17:09:01.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

