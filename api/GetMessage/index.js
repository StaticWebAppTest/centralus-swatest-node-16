module.exports = async function (context, req) {
  const date = "2024-07-16T14:10:44.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

