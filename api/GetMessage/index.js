module.exports = async function (context, req) {
  const date = "2022-04-29T05:14:31.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

