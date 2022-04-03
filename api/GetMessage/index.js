module.exports = async function (context, req) {
  const date = "2022-04-03T15:10:15.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

