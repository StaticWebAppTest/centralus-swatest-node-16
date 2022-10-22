module.exports = async function (context, req) {
  const date = "2022-10-22T21:11:27.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

