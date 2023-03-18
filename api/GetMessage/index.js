module.exports = async function (context, req) {
  const date = "2023-03-18T06:11:49.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

