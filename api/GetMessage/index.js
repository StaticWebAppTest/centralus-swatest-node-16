module.exports = async function (context, req) {
  const date = "2024-10-02T18:16:21.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

