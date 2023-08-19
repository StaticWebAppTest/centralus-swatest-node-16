module.exports = async function (context, req) {
  const date = "2023-08-19T15:07:08.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

