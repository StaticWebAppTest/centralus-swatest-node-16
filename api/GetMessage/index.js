module.exports = async function (context, req) {
  const date = "2023-08-26T12:14:01.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

