module.exports = async function (context, req) {
  const date = "2023-11-22T13:13:19.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

