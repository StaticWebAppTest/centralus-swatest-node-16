module.exports = async function (context, req) {
  const date = "2022-08-07T15:10:18.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

