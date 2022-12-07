module.exports = async function (context, req) {
  const date = "2022-12-07T07:09:02.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

