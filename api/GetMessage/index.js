module.exports = async function (context, req) {
  const date = "2023-01-17T06:12:18.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

