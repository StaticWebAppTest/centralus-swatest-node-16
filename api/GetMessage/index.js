module.exports = async function (context, req) {
  const date = "2022-10-18T12:28:36.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

