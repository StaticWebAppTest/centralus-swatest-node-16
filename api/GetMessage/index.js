module.exports = async function (context, req) {
  const date = "2024-11-17T15:11:02.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

