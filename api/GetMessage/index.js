module.exports = async function (context, req) {
  const date = "2023-09-27T04:10:40.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

