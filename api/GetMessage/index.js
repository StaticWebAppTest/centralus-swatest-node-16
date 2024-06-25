module.exports = async function (context, req) {
  const date = "2024-06-25T13:12:30.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

