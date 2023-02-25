module.exports = async function (context, req) {
  const date = "2023-02-25T03:14:07.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

