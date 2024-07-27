module.exports = async function (context, req) {
  const date = "2024-07-27T08:11:58.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

