module.exports = async function (context, req) {
  const date = "2023-07-06T06:13:37.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

