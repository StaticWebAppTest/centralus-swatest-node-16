module.exports = async function (context, req) {
  const date = "2022-12-04T19:07:14.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

