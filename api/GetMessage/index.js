module.exports = async function (context, req) {
  const date = "2024-07-05T22:11:19.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

