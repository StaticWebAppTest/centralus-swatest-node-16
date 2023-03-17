module.exports = async function (context, req) {
  const date = "2023-03-17T20:10:12.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

