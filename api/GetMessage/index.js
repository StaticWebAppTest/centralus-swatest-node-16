module.exports = async function (context, req) {
  const date = "2024-01-27T15:07:32.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

