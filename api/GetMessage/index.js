module.exports = async function (context, req) {
  const date = "2023-04-19T18:11:21.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

