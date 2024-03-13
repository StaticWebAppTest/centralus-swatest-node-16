module.exports = async function (context, req) {
  const date = "2024-03-13T04:10:52.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

