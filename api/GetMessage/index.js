module.exports = async function (context, req) {
  const date = "2023-03-11T14:07:57.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

