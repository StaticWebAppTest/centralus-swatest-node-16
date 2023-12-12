module.exports = async function (context, req) {
  const date = "2023-12-12T05:08:59.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

