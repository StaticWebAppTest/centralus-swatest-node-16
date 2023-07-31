module.exports = async function (context, req) {
  const date = "2023-07-31T12:18:30.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

