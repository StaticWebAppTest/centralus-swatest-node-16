module.exports = async function (context, req) {
  const date = "2022-09-13T04:13:54.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

