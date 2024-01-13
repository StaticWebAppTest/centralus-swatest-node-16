module.exports = async function (context, req) {
  const date = "2024-01-13T04:11:25.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

