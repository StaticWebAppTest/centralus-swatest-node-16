module.exports = async function (context, req) {
  const date = "2024-06-02T00:50:19.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

