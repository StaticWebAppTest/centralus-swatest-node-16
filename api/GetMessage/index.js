module.exports = async function (context, req) {
  const date = "2023-02-02T23:10:17.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

