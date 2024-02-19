module.exports = async function (context, req) {
  const date = "2024-02-19T13:09:15.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

