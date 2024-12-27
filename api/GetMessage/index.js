module.exports = async function (context, req) {
  const date = "2024-12-27T13:17:27.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

