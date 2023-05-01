module.exports = async function (context, req) {
  const date = "2023-05-01T16:11:21.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

