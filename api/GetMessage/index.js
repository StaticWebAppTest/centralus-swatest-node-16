module.exports = async function (context, req) {
  const date = "2022-07-23T15:10:42.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

