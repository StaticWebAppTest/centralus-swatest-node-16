module.exports = async function (context, req) {
  const date = "2024-11-04T13:21:24.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

