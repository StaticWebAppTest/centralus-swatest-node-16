module.exports = async function (context, req) {
  const date = "2023-08-31T12:16:06.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

