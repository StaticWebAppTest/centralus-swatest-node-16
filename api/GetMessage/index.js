module.exports = async function (context, req) {
  const date = "2022-03-23T17:12:10.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

