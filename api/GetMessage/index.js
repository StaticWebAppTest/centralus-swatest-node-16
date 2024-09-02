module.exports = async function (context, req) {
  const date = "2024-09-02T03:12:54.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

