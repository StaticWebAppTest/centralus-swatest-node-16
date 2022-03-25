module.exports = async function (context, req) {
  const date = "2022-03-25T06:13:17.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

