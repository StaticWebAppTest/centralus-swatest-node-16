module.exports = async function (context, req) {
  const date = "2024-11-10T15:10:50.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

