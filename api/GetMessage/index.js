module.exports = async function (context, req) {
  const date = "2024-03-09T13:08:28.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

