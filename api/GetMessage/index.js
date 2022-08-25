module.exports = async function (context, req) {
  const date = "2022-08-25T12:23:33.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

