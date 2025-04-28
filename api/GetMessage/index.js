module.exports = async function (context, req) {
  const date = "2025-04-28T11:32:11.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

