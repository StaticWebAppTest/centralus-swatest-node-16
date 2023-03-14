module.exports = async function (context, req) {
  const date = "2023-03-14T16:15:31.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

