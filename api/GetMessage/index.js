module.exports = async function (context, req) {
  const date = "2023-10-16T12:17:40.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

