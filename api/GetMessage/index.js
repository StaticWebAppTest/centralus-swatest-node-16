module.exports = async function (context, req) {
  const date = "2023-01-08T15:09:49.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

