module.exports = async function (context, req) {
  const date = "2023-11-03T07:08:30.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

