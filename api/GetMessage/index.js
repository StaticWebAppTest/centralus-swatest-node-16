module.exports = async function (context, req) {
  const date = "2023-07-25T04:10:51.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

