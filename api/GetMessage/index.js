module.exports = async function (context, req) {
  const date = "2024-01-02T13:10:54.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

