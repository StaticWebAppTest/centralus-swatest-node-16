module.exports = async function (context, req) {
  const date = "2022-03-31T00:46:24.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

