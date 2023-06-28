module.exports = async function (context, req) {
  const date = "2023-06-28T02:53:12.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

