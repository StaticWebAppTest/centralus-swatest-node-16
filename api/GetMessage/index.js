module.exports = async function (context, req) {
  const date = "2022-03-23T16:13:39.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

