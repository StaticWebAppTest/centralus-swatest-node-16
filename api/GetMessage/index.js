module.exports = async function (context, req) {
  const date = "2023-04-04T10:09:28.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

