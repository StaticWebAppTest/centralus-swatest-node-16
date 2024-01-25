module.exports = async function (context, req) {
  const date = "2024-01-25T13:12:31.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

