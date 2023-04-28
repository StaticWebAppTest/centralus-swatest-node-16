module.exports = async function (context, req) {
  const date = "2023-04-28T02:02:10.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

