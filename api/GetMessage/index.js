module.exports = async function (context, req) {
  const date = "2023-01-15T15:08:53.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

