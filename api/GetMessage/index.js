module.exports = async function (context, req) {
  const date = "2022-12-16T02:05:03.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

