module.exports = async function (context, req) {
  const date = "2022-12-09T07:08:40.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

