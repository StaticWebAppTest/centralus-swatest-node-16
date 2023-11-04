module.exports = async function (context, req) {
  const date = "2023-11-04T15:07:55.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

