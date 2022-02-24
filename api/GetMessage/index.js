module.exports = async function (context, req) {
  const date = "2022-02-24T16:13:22.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

