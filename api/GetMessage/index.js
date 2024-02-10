module.exports = async function (context, req) {
  const date = "2024-02-10T19:06:30.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

