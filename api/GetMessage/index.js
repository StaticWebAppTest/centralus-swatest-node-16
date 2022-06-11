module.exports = async function (context, req) {
  const date = "2022-06-11T10:10:30.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

