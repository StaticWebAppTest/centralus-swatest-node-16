module.exports = async function (context, req) {
  const date = "2024-09-23T18:15:15.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

