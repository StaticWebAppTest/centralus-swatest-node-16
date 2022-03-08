module.exports = async function (context, req) {
  const date = "2022-03-08T06:12:29.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

