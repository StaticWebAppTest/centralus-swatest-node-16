module.exports = async function (context, req) {
  const date = "2024-05-15T12:19:23.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

