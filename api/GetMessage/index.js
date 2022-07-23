module.exports = async function (context, req) {
  const date = "2022-07-23T05:13:26.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

