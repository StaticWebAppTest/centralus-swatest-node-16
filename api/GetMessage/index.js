module.exports = async function (context, req) {
  const date = "2023-01-27T06:12:24.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

