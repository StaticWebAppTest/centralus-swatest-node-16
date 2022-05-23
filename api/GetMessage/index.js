module.exports = async function (context, req) {
  const date = "2022-05-23T23:11:24.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

