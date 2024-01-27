module.exports = async function (context, req) {
  const date = "2024-01-27T02:13:04.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

