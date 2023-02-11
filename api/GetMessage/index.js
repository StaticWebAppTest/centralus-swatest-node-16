module.exports = async function (context, req) {
  const date = "2023-02-11T14:07:57.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

