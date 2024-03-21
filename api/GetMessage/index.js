module.exports = async function (context, req) {
  const date = "2024-03-21T20:10:15.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

