module.exports = async function (context, req) {
  const date = "2022-12-09T10:10:31.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

