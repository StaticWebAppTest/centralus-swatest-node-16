module.exports = async function (context, req) {
  const date = "2023-02-18T13:14:29.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

