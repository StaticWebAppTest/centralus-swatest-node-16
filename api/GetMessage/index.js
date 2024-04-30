module.exports = async function (context, req) {
  const date = "2024-04-30T06:12:33.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

