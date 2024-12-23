module.exports = async function (context, req) {
  const date = "2024-12-23T23:10:51.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

