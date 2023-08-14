module.exports = async function (context, req) {
  const date = "2023-08-14T04:10:08.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

