module.exports = async function (context, req) {
  const date = "2022-03-15T16:14:16.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

