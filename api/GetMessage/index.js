module.exports = async function (context, req) {
  const date = "2023-12-21T04:11:36.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

