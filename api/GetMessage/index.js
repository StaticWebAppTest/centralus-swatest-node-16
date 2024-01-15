module.exports = async function (context, req) {
  const date = "2024-01-15T18:11:45.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

