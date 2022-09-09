module.exports = async function (context, req) {
  const date = "2022-09-09T16:15:47.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

