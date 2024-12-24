module.exports = async function (context, req) {
  const date = "2024-12-24T02:15:08.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

