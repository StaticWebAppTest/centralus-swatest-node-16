module.exports = async function (context, req) {
  const date = "2023-02-17T14:09:13.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

