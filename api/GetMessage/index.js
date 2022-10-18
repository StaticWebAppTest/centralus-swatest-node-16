module.exports = async function (context, req) {
  const date = "2022-10-18T04:13:59.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

