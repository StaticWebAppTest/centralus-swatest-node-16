module.exports = async function (context, req) {
  const date = "2024-04-08T21:08:17.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

