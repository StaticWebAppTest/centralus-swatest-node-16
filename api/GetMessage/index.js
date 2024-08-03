module.exports = async function (context, req) {
  const date = "2024-08-03T13:10:36.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

