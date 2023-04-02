module.exports = async function (context, req) {
  const date = "2023-04-02T15:08:05.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

