module.exports = async function (context, req) {
  const date = "2022-12-23T08:12:20.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

