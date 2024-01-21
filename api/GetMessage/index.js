module.exports = async function (context, req) {
  const date = "2024-01-21T12:15:57.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

