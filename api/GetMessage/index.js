module.exports = async function (context, req) {
  const date = "2023-10-11T12:17:31.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

