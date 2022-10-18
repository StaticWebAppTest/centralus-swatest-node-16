module.exports = async function (context, req) {
  const date = "2022-10-18T01:14:55.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

