module.exports = async function (context, req) {
  const date = "2022-12-16T06:12:10.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

