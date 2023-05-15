module.exports = async function (context, req) {
  const date = "2023-05-15T05:08:37.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

