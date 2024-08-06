module.exports = async function (context, req) {
  const date = "2024-08-06T06:16:25.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

