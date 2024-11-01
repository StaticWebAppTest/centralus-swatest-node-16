module.exports = async function (context, req) {
  const date = "2024-11-01T09:12:43.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

