module.exports = async function (context, req) {
  const date = "2022-07-23T03:09:34.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

