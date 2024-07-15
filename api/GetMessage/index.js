module.exports = async function (context, req) {
  const date = "2024-07-15T02:03:50.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

