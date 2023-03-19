module.exports = async function (context, req) {
  const date = "2023-03-19T06:12:53.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

