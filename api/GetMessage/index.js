module.exports = async function (context, req) {
  const date = "2023-12-02T02:18:14.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

