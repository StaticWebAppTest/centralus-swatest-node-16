module.exports = async function (context, req) {
  const date = "2023-03-04T23:09:15.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

