module.exports = async function (context, req) {
  const date = "2023-06-04T04:09:55.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

