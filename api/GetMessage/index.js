module.exports = async function (context, req) {
  const date = "2022-03-04T17:11:34.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

