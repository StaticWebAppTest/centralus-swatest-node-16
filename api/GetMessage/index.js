module.exports = async function (context, req) {
  const date = "2023-09-02T09:07:25.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

