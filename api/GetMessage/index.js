module.exports = async function (context, req) {
  const date = "2024-07-10T01:58:57.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

