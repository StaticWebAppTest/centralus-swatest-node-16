module.exports = async function (context, req) {
  const date = "2024-08-02T04:13:20.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

