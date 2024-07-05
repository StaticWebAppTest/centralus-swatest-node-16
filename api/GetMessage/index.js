module.exports = async function (context, req) {
  const date = "2024-07-05T06:15:05.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

