module.exports = async function (context, req) {
  const date = "2022-03-31T21:09:43.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

