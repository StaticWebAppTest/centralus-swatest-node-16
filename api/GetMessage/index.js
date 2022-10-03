module.exports = async function (context, req) {
  const date = "2022-10-03T15:16:44.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

