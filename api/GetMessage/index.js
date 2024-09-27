module.exports = async function (context, req) {
  const date = "2024-09-27T02:14:50.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

