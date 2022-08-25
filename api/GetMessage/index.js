module.exports = async function (context, req) {
  const date = "2022-08-25T04:05:16.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

