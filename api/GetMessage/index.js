module.exports = async function (context, req) {
  const date = "2022-11-06T23:11:15.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

