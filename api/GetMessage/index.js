module.exports = async function (context, req) {
  const date = "2024-05-27T07:10:54.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

