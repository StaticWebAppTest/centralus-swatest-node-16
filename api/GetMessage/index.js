module.exports = async function (context, req) {
  const date = "2022-05-14T17:15:30.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

