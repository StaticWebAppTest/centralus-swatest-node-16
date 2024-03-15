module.exports = async function (context, req) {
  const date = "2024-03-15T01:42:27.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

