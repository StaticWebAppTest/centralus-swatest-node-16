module.exports = async function (context, req) {
  const date = "2023-02-17T20:10:32.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

