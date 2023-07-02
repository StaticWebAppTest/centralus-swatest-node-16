module.exports = async function (context, req) {
  const date = "2023-07-02T19:07:22.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

