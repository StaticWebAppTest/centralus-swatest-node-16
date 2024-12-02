module.exports = async function (context, req) {
  const date = "2024-12-02T21:11:33.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

