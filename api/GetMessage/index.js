module.exports = async function (context, req) {
  const date = "2023-10-17T05:08:18.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

