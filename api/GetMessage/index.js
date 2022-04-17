module.exports = async function (context, req) {
  const date = "2022-04-17T00:52:10.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

