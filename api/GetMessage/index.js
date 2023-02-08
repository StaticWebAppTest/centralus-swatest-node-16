module.exports = async function (context, req) {
  const date = "2023-02-08T14:09:12.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

