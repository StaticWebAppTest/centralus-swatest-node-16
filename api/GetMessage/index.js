module.exports = async function (context, req) {
  const date = "2024-11-25T20:13:58.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

