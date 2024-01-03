module.exports = async function (context, req) {
  const date = "2024-01-03T05:09:04.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

