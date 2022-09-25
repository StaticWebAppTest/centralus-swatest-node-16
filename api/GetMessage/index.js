module.exports = async function (context, req) {
  const date = "2022-09-25T07:12:52.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

