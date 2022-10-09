module.exports = async function (context, req) {
  const date = "2022-10-09T16:17:18.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

