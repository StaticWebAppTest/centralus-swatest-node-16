module.exports = async function (context, req) {
  const date = "2023-08-04T12:16:32.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

