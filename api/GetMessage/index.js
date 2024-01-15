module.exports = async function (context, req) {
  const date = "2024-01-15T23:09:18.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

