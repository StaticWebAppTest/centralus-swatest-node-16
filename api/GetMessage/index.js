module.exports = async function (context, req) {
  const date = "2022-09-14T01:05:47.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

