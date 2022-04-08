module.exports = async function (context, req) {
  const date = "2022-04-08T15:11:00.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

