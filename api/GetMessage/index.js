module.exports = async function (context, req) {
  const date = "2023-11-11T05:07:53.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

