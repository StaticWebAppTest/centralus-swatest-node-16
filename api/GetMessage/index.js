module.exports = async function (context, req) {
  const date = "2023-08-08T12:17:02.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

