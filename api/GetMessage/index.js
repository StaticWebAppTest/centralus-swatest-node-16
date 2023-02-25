module.exports = async function (context, req) {
  const date = "2023-02-25T20:10:14.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

