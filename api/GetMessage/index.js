module.exports = async function (context, req) {
  const date = "2024-07-06T13:10:17.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

