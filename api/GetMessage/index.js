module.exports = async function (context, req) {
  const date = "2023-12-01T14:08:44.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

