module.exports = async function (context, req) {
  const date = "2023-06-09T18:10:54.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

