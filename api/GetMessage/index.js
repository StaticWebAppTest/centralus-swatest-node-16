module.exports = async function (context, req) {
  const date = "2024-02-26T14:09:19.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

