module.exports = async function (context, req) {
  const date = "2024-02-11T19:07:26.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

