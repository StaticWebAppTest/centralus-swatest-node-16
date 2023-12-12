module.exports = async function (context, req) {
  const date = "2023-12-12T13:12:13.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

