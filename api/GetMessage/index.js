module.exports = async function (context, req) {
  const date = "2024-04-04T06:12:08.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

