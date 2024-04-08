module.exports = async function (context, req) {
  const date = "2024-04-08T04:11:56.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

