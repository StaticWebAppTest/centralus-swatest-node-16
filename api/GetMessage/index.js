module.exports = async function (context, req) {
  const date = "2022-12-19T16:14:45.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

