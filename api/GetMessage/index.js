module.exports = async function (context, req) {
  const date = "2023-09-28T07:08:36.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

