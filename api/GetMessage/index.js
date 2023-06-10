module.exports = async function (context, req) {
  const date = "2023-06-10T19:06:46.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

