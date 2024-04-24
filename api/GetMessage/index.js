module.exports = async function (context, req) {
  const date = "2024-04-24T15:10:24.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

