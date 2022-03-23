module.exports = async function (context, req) {
  const date = "2022-03-23T00:50:46.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

