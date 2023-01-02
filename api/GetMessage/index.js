module.exports = async function (context, req) {
  const date = "2023-01-02T10:10:10.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

