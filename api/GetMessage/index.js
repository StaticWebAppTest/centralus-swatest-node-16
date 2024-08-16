module.exports = async function (context, req) {
  const date = "2024-08-16T13:14:12.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

