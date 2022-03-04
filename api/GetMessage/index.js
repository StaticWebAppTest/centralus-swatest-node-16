module.exports = async function (context, req) {
  const date = "2022-03-04T00:46:34.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

