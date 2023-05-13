module.exports = async function (context, req) {
  const date = "2023-05-13T05:08:16.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

