module.exports = async function (context, req) {
  const date = "2023-04-23T02:10:06.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

