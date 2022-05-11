module.exports = async function (context, req) {
  const date = "2022-05-11T07:12:09.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

