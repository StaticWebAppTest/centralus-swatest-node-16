module.exports = async function (context, req) {
  const date = "2023-02-19T08:12:12.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

