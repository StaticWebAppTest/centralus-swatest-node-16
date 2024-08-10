module.exports = async function (context, req) {
  const date = "2024-08-10T21:10:47.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

