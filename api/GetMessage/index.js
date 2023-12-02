module.exports = async function (context, req) {
  const date = "2023-12-02T16:10:29.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

