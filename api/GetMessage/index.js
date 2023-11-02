module.exports = async function (context, req) {
  const date = "2023-11-02T09:08:59.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

