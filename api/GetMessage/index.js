module.exports = async function (context, req) {
  const date = "2023-08-07T14:08:28.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

