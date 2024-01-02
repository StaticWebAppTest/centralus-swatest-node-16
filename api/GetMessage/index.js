module.exports = async function (context, req) {
  const date = "2024-01-02T02:23:10.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

