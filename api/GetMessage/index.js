module.exports = async function (context, req) {
  const date = "2022-08-29T13:34:20.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

