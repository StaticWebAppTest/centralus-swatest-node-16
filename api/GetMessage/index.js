module.exports = async function (context, req) {
  const date = "2022-12-11T04:12:15.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

