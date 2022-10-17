module.exports = async function (context, req) {
  const date = "2022-10-17T04:26:22.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

