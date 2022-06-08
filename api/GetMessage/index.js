module.exports = async function (context, req) {
  const date = "2022-06-08T13:33:28.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

