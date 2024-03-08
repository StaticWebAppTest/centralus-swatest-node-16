module.exports = async function (context, req) {
  const date = "2024-03-08T13:09:35.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

