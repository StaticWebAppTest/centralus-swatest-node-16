module.exports = async function (context, req) {
  const date = "2023-09-22T01:42:27.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

