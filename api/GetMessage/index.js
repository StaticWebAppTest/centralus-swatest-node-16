module.exports = async function (context, req) {
  const date = "2024-02-03T20:09:41.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

