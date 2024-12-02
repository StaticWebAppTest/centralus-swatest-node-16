module.exports = async function (context, req) {
  const date = "2024-12-02T11:10:51.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

