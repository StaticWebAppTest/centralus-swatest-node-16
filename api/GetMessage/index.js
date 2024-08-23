module.exports = async function (context, req) {
  const date = "2024-08-23T05:11:02.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

