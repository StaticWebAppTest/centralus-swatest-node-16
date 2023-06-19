module.exports = async function (context, req) {
  const date = "2023-06-19T13:12:50.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

