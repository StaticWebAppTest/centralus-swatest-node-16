module.exports = async function (context, req) {
  const date = "2024-04-02T14:08:23.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

