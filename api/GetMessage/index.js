module.exports = async function (context, req) {
  const date = "2023-10-29T20:08:38.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

