module.exports = async function (context, req) {
  const date = "2024-01-15T06:13:14.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

