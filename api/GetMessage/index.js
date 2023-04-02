module.exports = async function (context, req) {
  const date = "2023-04-02T08:10:20.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

