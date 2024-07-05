module.exports = async function (context, req) {
  const date = "2024-07-05T13:11:54.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

