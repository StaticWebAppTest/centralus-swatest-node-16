module.exports = async function (context, req) {
  const date = "2022-06-04T13:16:57.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

