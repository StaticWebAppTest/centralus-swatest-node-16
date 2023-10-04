module.exports = async function (context, req) {
  const date = "2023-10-04T06:12:12.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

