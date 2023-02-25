module.exports = async function (context, req) {
  const date = "2023-02-25T06:12:03.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

