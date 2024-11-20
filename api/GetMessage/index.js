module.exports = async function (context, req) {
  const date = "2024-11-20T13:21:40.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

