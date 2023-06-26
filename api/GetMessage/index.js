module.exports = async function (context, req) {
  const date = "2023-06-26T06:14:03.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

