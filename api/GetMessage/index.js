module.exports = async function (context, req) {
  const date = "2022-08-23T01:09:28.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

