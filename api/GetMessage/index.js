module.exports = async function (context, req) {
  const date = "2024-01-13T06:11:35.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

