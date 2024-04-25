module.exports = async function (context, req) {
  const date = "2024-04-25T14:07:18.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

