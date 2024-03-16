module.exports = async function (context, req) {
  const date = "2024-03-16T13:09:54.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

