module.exports = async function (context, req) {
  const date = "2022-11-25T04:12:40.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

