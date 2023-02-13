module.exports = async function (context, req) {
  const date = "2023-02-13T14:09:31.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

