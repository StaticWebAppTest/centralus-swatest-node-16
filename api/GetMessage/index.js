module.exports = async function (context, req) {
  const date = "2023-07-02T12:17:45.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

