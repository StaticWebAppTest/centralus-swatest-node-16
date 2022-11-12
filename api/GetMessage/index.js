module.exports = async function (context, req) {
  const date = "2022-11-12T22:10:15.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

