module.exports = async function (context, req) {
  const date = "2022-09-06T01:09:30.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

