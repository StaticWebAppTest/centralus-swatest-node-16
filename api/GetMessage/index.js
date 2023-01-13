module.exports = async function (context, req) {
  const date = "2023-01-13T12:18:08.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

