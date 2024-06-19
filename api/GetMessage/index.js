module.exports = async function (context, req) {
  const date = "2024-06-19T02:31:19.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

