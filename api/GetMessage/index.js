module.exports = async function (context, req) {
  const date = "2023-12-13T18:10:27.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

