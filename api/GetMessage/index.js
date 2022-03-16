module.exports = async function (context, req) {
  const date = "2022-03-16T04:12:15.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

