module.exports = async function (context, req) {
  const date = "2022-03-18T10:11:02.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

