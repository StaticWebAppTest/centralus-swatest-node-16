module.exports = async function (context, req) {
  const date = "2023-07-21T19:06:14.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

