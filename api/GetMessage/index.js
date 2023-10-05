module.exports = async function (context, req) {
  const date = "2023-10-05T05:08:23.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

