module.exports = async function (context, req) {
  const date = "2022-10-11T10:15:01.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

