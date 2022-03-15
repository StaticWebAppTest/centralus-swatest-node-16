module.exports = async function (context, req) {
  const date = "2022-03-15T21:07:48.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

