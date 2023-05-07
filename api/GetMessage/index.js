module.exports = async function (context, req) {
  const date = "2023-05-07T19:06:55.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

