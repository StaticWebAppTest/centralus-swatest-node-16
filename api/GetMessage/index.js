module.exports = async function (context, req) {
  const date = "2022-05-15T07:10:17.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

