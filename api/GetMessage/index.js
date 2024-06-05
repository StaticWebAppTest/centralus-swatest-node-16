module.exports = async function (context, req) {
  const date = "2024-06-05T13:12:27.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

