module.exports = async function (context, req) {
  const date = "2023-04-14T04:10:38.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

