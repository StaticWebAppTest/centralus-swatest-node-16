module.exports = async function (context, req) {
  const date = "2024-12-04T04:15:37.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

