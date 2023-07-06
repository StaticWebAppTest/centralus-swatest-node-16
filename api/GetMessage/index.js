module.exports = async function (context, req) {
  const date = "2023-07-06T04:12:34.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

