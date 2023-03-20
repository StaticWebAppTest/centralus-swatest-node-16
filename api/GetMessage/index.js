module.exports = async function (context, req) {
  const date = "2023-03-20T04:11:55.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

