module.exports = async function (context, req) {
  const date = "2023-05-30T06:11:29.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

