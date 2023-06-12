module.exports = async function (context, req) {
  const date = "2023-06-12T10:09:32.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

