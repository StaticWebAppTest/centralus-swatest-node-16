module.exports = async function (context, req) {
  const date = "2024-09-02T13:17:21.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

