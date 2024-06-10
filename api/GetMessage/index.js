module.exports = async function (context, req) {
  const date = "2024-06-10T10:11:50.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

