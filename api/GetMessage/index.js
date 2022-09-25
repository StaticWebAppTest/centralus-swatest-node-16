module.exports = async function (context, req) {
  const date = "2022-09-25T04:03:17.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

