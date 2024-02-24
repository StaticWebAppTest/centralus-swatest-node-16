module.exports = async function (context, req) {
  const date = "2024-02-24T08:10:11.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

