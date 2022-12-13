module.exports = async function (context, req) {
  const date = "2022-12-13T00:55:03.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

