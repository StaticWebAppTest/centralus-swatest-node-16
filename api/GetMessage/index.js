module.exports = async function (context, req) {
  const date = "2022-10-07T07:20:48.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

