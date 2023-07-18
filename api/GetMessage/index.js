module.exports = async function (context, req) {
  const date = "2023-07-18T04:11:02.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

