module.exports = async function (context, req) {
  const date = "2023-12-23T06:11:04.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

