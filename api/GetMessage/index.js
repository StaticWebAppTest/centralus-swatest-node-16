module.exports = async function (context, req) {
  const date = "2024-06-07T13:12:53.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

