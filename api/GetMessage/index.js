module.exports = async function (context, req) {
  const date = "2024-11-17T23:11:40.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

