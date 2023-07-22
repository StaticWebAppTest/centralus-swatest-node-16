module.exports = async function (context, req) {
  const date = "2023-07-22T00:53:38.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

