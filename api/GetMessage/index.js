module.exports = async function (context, req) {
  const date = "2024-02-23T21:07:58.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

