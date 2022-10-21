module.exports = async function (context, req) {
  const date = "2022-10-21T19:17:22.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

