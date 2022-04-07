module.exports = async function (context, req) {
  const date = "2022-04-07T07:10:35.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

