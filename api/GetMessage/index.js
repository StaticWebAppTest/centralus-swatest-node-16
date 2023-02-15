module.exports = async function (context, req) {
  const date = "2023-02-15T10:11:14.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

