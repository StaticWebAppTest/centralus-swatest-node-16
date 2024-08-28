module.exports = async function (context, req) {
  const date = "2024-08-28T12:21:12.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

