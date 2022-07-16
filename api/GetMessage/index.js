module.exports = async function (context, req) {
  const date = "2022-07-16T16:13:06.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

