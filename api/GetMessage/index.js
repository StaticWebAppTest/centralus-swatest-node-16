module.exports = async function (context, req) {
  const date = "2023-10-21T05:08:08.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

