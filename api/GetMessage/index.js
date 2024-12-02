module.exports = async function (context, req) {
  const date = "2024-12-02T07:13:10.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

