module.exports = async function (context, req) {
  const date = "2023-11-14T05:08:45.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

