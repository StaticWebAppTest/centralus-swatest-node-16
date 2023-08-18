module.exports = async function (context, req) {
  const date = "2023-08-18T16:10:27.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

