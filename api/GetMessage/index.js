module.exports = async function (context, req) {
  const date = "2022-04-23T13:19:15.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

