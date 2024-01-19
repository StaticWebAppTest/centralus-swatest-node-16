module.exports = async function (context, req) {
  const date = "2024-01-19T18:12:16.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

