module.exports = async function (context, req) {
  const date = "2022-03-04T07:09:34.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

