module.exports = async function (context, req) {
  const date = "2023-08-31T16:11:20.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

