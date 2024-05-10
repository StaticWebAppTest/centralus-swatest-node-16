module.exports = async function (context, req) {
  const date = "2024-05-10T19:08:19.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

