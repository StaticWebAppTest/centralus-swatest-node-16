module.exports = async function (context, req) {
  const date = "2022-09-29T01:16:10.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

