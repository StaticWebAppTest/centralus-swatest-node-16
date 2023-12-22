module.exports = async function (context, req) {
  const date = "2023-12-22T17:08:01.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

