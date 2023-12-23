module.exports = async function (context, req) {
  const date = "2023-12-23T05:08:21.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

