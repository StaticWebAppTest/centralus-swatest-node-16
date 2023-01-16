module.exports = async function (context, req) {
  const date = "2023-01-16T08:13:08.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

