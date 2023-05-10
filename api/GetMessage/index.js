module.exports = async function (context, req) {
  const date = "2023-05-10T05:08:27.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

