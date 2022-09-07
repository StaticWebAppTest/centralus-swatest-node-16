module.exports = async function (context, req) {
  const date = "2022-09-07T15:12:10.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

