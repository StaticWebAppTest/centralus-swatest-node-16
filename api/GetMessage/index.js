module.exports = async function (context, req) {
  const date = "2023-04-08T07:07:29.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

