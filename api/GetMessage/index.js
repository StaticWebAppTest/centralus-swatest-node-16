module.exports = async function (context, req) {
  const date = "2023-05-11T11:07:18.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

