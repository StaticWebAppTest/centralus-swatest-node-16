module.exports = async function (context, req) {
  const date = "2023-05-12T23:08:02.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

