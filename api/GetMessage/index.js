module.exports = async function (context, req) {
  const date = "2024-01-10T18:12:03.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

