module.exports = async function (context, req) {
  const date = "2023-04-14T16:11:41.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

