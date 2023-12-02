module.exports = async function (context, req) {
  const date = "2023-12-02T04:10:35.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

