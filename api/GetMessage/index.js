module.exports = async function (context, req) {
  const date = "2024-03-01T12:15:47.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

