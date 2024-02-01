module.exports = async function (context, req) {
  const date = "2024-02-01T18:10:55.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

