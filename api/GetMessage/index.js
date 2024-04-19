module.exports = async function (context, req) {
  const date = "2024-04-19T00:42:30.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

