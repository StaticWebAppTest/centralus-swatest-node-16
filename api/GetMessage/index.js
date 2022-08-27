module.exports = async function (context, req) {
  const date = "2022-08-27T18:13:15.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

