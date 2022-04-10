module.exports = async function (context, req) {
  const date = "2022-04-10T03:24:26.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

