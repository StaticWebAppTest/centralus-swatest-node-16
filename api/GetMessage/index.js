module.exports = async function (context, req) {
  const date = "2023-04-23T04:10:52.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

