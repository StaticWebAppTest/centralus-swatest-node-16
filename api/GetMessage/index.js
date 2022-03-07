module.exports = async function (context, req) {
  const date = "2022-03-07T12:16:45.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

