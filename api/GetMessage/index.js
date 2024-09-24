module.exports = async function (context, req) {
  const date = "2024-09-24T13:20:14.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

