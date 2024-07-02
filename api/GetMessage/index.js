module.exports = async function (context, req) {
  const date = "2024-07-02T01:58:08.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

