module.exports = async function (context, req) {
  const date = "2023-01-10T06:13:36.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

