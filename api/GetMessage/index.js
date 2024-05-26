module.exports = async function (context, req) {
  const date = "2024-05-26T04:11:23.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

