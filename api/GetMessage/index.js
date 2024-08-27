module.exports = async function (context, req) {
  const date = "2024-08-27T03:11:53.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

