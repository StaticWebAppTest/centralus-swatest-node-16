module.exports = async function (context, req) {
  const date = "2023-01-06T07:09:14.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

