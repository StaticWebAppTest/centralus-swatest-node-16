module.exports = async function (context, req) {
  const date = "2022-06-17T13:31:17.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

