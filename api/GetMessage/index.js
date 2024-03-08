module.exports = async function (context, req) {
  const date = "2024-03-08T11:07:34.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

