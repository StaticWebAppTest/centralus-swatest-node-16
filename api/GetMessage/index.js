module.exports = async function (context, req) {
  const date = "2022-05-16T02:37:12.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

