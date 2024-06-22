module.exports = async function (context, req) {
  const date = "2024-06-22T13:12:50.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

