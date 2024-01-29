module.exports = async function (context, req) {
  const date = "2024-01-29T08:11:40.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

