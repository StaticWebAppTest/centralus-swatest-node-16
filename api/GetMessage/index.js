module.exports = async function (context, req) {
  const date = "2024-03-23T20:09:45.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

