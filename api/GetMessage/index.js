module.exports = async function (context, req) {
  const date = "2022-11-13T16:14:28.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

