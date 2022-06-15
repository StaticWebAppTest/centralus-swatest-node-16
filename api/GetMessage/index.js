module.exports = async function (context, req) {
  const date = "2022-06-15T05:14:44.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

