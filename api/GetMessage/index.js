module.exports = async function (context, req) {
  const date = "2023-07-05T02:53:54.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

