module.exports = async function (context, req) {
  const date = "2023-11-15T12:17:15.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

