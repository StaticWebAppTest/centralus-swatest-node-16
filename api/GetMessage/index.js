module.exports = async function (context, req) {
  const date = "2024-10-13T05:12:10.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

