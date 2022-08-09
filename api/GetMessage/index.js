module.exports = async function (context, req) {
  const date = "2022-08-09T06:14:32.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

