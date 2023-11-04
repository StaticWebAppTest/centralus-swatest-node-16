module.exports = async function (context, req) {
  const date = "2023-11-04T20:08:22.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

