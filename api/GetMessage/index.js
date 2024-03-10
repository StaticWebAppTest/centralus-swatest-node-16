module.exports = async function (context, req) {
  const date = "2024-03-10T19:06:29.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

