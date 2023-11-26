module.exports = async function (context, req) {
  const date = "2023-11-26T07:08:14.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

