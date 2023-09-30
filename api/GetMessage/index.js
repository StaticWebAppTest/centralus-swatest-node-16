module.exports = async function (context, req) {
  const date = "2023-09-30T20:08:22.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

