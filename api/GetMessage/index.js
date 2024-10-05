module.exports = async function (context, req) {
  const date = "2024-10-05T18:13:49.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

