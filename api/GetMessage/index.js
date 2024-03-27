module.exports = async function (context, req) {
  const date = "2024-03-27T05:10:21.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

