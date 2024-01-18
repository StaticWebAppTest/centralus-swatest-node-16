module.exports = async function (context, req) {
  const date = "2024-01-18T04:11:42.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

