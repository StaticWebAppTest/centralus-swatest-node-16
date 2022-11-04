module.exports = async function (context, req) {
  const date = "2022-11-04T16:15:59.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

