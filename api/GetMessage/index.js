module.exports = async function (context, req) {
  const date = "2023-11-25T06:11:14.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

