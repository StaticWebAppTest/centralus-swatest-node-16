module.exports = async function (context, req) {
  const date = "2023-11-25T04:10:48.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

