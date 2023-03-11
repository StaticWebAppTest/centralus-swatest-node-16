module.exports = async function (context, req) {
  const date = "2023-03-11T22:08:10.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

