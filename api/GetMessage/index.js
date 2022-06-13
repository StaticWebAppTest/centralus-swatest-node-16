module.exports = async function (context, req) {
  const date = "2022-06-13T12:21:07.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

