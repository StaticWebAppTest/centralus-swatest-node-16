module.exports = async function (context, req) {
  const date = "2024-04-23T13:10:24.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

