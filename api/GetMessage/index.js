module.exports = async function (context, req) {
  const date = "2024-06-12T04:12:18.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

