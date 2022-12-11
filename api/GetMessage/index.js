module.exports = async function (context, req) {
  const date = "2022-12-11T00:55:54.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

