module.exports = async function (context, req) {
  const date = "2024-07-08T04:13:52.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

