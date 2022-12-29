module.exports = async function (context, req) {
  const date = "2022-12-29T03:10:23.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

