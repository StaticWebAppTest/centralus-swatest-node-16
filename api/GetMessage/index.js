module.exports = async function (context, req) {
  const date = "2023-01-02T09:09:30.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

