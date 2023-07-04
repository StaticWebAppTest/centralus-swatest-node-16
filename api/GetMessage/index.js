module.exports = async function (context, req) {
  const date = "2023-07-04T06:13:36.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

