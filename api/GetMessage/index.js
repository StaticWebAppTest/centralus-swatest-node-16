module.exports = async function (context, req) {
  const date = "2023-07-01T05:08:57.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

