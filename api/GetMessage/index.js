module.exports = async function (context, req) {
  const date = "2023-08-23T04:09:55.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

