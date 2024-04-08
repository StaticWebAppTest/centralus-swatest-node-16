module.exports = async function (context, req) {
  const date = "2024-04-08T13:09:44.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

