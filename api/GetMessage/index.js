module.exports = async function (context, req) {
  const date = "2022-05-25T14:22:22.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

