module.exports = async function (context, req) {
  const date = "2022-05-18T17:19:03.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

