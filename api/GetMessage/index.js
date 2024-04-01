module.exports = async function (context, req) {
  const date = "2024-04-01T23:10:50.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

