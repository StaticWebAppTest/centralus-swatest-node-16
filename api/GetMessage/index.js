module.exports = async function (context, req) {
  const date = "2022-06-07T23:10:11.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

