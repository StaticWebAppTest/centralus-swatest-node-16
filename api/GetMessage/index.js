module.exports = async function (context, req) {
  const date = "2023-10-06T06:12:14.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

