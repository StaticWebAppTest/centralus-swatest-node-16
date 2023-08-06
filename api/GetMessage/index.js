module.exports = async function (context, req) {
  const date = "2023-08-06T04:09:54.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

