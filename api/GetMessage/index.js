module.exports = async function (context, req) {
  const date = "2023-11-25T05:08:10.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

