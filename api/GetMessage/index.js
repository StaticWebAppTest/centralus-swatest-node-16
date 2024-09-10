module.exports = async function (context, req) {
  const date = "2024-09-10T19:10:11.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

