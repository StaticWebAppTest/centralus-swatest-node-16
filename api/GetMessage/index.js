module.exports = async function (context, req) {
  const date = "2023-06-14T02:10:57.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

