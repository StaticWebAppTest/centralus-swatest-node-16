module.exports = async function (context, req) {
  const date = "2022-04-01T02:52:16.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

