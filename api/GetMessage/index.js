module.exports = async function (context, req) {
  const date = "2022-07-21T09:10:52.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

