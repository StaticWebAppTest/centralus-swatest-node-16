module.exports = async function (context, req) {
  const date = "2024-12-28T14:09:28.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

