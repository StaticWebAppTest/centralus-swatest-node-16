module.exports = async function (context, req) {
  const date = "2024-08-12T22:10:38.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

