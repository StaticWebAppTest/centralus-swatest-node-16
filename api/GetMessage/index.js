module.exports = async function (context, req) {
  const date = "2023-01-11T04:12:09.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

