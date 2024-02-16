module.exports = async function (context, req) {
  const date = "2024-02-16T21:07:25.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

