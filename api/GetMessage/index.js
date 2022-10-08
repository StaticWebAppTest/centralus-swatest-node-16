module.exports = async function (context, req) {
  const date = "2022-10-08T12:22:35.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

