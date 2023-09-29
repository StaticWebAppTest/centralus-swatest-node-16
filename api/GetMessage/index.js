module.exports = async function (context, req) {
  const date = "2023-09-29T04:10:52.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

