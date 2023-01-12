module.exports = async function (context, req) {
  const date = "2023-01-12T15:16:49.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

