module.exports = async function (context, req) {
  const date = "2022-03-23T21:07:39.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

