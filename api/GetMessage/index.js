module.exports = async function (context, req) {
  const date = "2023-08-24T02:13:22.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

