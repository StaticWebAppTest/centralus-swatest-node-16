module.exports = async function (context, req) {
  const date = "2022-09-18T07:12:20.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

