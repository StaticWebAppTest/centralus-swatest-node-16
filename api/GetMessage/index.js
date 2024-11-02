module.exports = async function (context, req) {
  const date = "2024-11-02T10:11:19.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

