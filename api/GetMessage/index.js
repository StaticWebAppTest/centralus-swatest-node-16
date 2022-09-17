module.exports = async function (context, req) {
  const date = "2022-09-17T05:35:50.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

