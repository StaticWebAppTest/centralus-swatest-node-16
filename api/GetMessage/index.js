module.exports = async function (context, req) {
  const date = "2024-06-12T13:12:35.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

