module.exports = async function (context, req) {
  const date = "2024-01-18T13:12:33.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

