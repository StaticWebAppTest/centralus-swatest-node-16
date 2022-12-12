module.exports = async function (context, req) {
  const date = "2022-12-12T12:19:02.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

