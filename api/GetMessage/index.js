module.exports = async function (context, req) {
  const date = "2023-09-11T08:12:02.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

