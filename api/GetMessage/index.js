module.exports = async function (context, req) {
  const date = "2023-05-09T10:09:50.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

