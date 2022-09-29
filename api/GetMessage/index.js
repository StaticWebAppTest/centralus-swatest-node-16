module.exports = async function (context, req) {
  const date = "2022-09-29T04:13:37.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

