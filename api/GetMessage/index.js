module.exports = async function (context, req) {
  const date = "2023-12-13T04:11:26.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

