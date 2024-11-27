module.exports = async function (context, req) {
  const date = "2024-11-27T13:22:53.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

