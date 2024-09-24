module.exports = async function (context, req) {
  const date = "2024-09-24T14:09:56.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

