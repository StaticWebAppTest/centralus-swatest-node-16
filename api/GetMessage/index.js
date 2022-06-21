module.exports = async function (context, req) {
  const date = "2022-06-21T09:26:29.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

