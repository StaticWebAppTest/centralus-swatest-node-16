module.exports = async function (context, req) {
  const date = "2022-12-09T17:09:15.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

