module.exports = async function (context, req) {
  const date = "2022-03-12T11:08:24.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

