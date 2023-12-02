module.exports = async function (context, req) {
  const date = "2023-12-02T00:42:19.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

