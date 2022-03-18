module.exports = async function (context, req) {
  const date = "2022-03-18T23:10:13.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

