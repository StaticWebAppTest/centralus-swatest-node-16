module.exports = async function (context, req) {
  const date = "2023-02-14T14:09:33.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

