module.exports = async function (context, req) {
  const date = "2022-03-23T23:10:13.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

