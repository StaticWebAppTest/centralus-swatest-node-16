module.exports = async function (context, req) {
  const date = "2024-03-10T02:19:43.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

