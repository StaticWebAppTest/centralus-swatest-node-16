module.exports = async function (context, req) {
  const date = "2024-06-10T13:13:10.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

