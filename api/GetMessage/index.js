module.exports = async function (context, req) {
  const date = "2022-10-03T04:44:18.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

