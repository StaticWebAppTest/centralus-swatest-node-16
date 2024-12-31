module.exports = async function (context, req) {
  const date = "2024-12-31T23:10:45.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

