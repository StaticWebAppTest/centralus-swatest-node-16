module.exports = async function (context, req) {
  const date = "2023-11-04T06:10:59.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

