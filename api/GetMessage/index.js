module.exports = async function (context, req) {
  const date = "2023-01-10T18:11:49.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

