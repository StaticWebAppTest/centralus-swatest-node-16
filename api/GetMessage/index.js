module.exports = async function (context, req) {
  const date = "2022-12-31T11:07:12.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

