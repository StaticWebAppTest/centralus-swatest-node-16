module.exports = async function (context, req) {
  const date = "2024-05-16T04:10:21.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

