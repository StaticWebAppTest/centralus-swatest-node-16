module.exports = async function (context, req) {
  const date = "2022-07-13T16:16:25.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

