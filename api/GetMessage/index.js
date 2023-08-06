module.exports = async function (context, req) {
  const date = "2023-08-06T06:10:47.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

