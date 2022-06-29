module.exports = async function (context, req) {
  const date = "2022-06-29T17:36:43.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

