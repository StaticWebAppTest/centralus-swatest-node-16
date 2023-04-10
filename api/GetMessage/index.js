module.exports = async function (context, req) {
  const date = "2023-04-10T00:46:57.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

