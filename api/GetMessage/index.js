module.exports = async function (context, req) {
  const date = "2023-11-30T07:08:48.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

