module.exports = async function (context, req) {
  const date = "2022-11-20T05:09:40.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

