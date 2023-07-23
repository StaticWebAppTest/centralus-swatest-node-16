module.exports = async function (context, req) {
  const date = "2023-07-23T08:10:26.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

