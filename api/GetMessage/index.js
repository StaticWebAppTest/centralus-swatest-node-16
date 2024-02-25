module.exports = async function (context, req) {
  const date = "2024-02-25T07:08:53.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

