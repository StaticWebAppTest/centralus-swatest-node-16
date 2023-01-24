module.exports = async function (context, req) {
  const date = "2023-01-24T17:08:30.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

