module.exports = async function (context, req) {
  const date = "2023-12-09T07:08:08.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

