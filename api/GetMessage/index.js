module.exports = async function (context, req) {
  const date = "2023-02-17T17:09:05.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

