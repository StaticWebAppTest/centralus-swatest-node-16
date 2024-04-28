module.exports = async function (context, req) {
  const date = "2024-04-28T22:08:23.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

