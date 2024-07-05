module.exports = async function (context, req) {
  const date = "2024-07-05T09:12:33.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

