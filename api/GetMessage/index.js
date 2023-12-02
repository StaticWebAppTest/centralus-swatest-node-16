module.exports = async function (context, req) {
  const date = "2023-12-02T12:15:17.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

