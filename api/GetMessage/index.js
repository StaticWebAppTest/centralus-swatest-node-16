module.exports = async function (context, req) {
  const date = "2022-09-29T14:23:14.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

