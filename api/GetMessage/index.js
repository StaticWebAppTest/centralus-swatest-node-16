module.exports = async function (context, req) {
  const date = "2022-09-29T15:14:25.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

