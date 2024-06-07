module.exports = async function (context, req) {
  const date = "2024-06-07T03:12:06.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

