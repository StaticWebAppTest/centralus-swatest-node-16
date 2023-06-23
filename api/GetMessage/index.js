module.exports = async function (context, req) {
  const date = "2023-06-23T16:12:42.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

