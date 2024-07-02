module.exports = async function (context, req) {
  const date = "2024-07-02T13:12:35.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

