module.exports = async function (context, req) {
  const date = "2024-05-20T06:13:50.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

