module.exports = async function (context, req) {
  const date = "2024-01-06T02:20:53.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

