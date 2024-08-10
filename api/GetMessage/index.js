module.exports = async function (context, req) {
  const date = "2024-08-10T19:07:56.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

