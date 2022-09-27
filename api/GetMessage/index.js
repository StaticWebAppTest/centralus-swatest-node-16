module.exports = async function (context, req) {
  const date = "2022-09-27T07:35:36.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

