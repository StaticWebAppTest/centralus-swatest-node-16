module.exports = async function (context, req) {
  const date = "2024-01-15T20:09:38.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

