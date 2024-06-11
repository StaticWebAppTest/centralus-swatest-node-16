module.exports = async function (context, req) {
  const date = "2024-06-11T02:29:45.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

