module.exports = async function (context, req) {
  const date = "2023-04-04T03:09:23.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

