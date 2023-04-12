module.exports = async function (context, req) {
  const date = "2023-04-12T02:00:04.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

