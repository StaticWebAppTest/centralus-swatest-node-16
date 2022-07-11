module.exports = async function (context, req) {
  const date = "2022-07-11T07:10:20.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

