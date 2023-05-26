module.exports = async function (context, req) {
  const date = "2023-05-26T11:08:07.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

