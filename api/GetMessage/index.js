module.exports = async function (context, req) {
  const date = "2024-04-27T21:08:10.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

