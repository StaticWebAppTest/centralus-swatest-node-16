module.exports = async function (context, req) {
  const date = "2024-07-04T20:10:43.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

