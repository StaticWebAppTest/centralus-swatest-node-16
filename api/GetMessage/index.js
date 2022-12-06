module.exports = async function (context, req) {
  const date = "2022-12-06T07:09:01.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

