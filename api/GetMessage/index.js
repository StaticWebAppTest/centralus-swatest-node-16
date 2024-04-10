module.exports = async function (context, req) {
  const date = "2024-04-10T23:10:19.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

