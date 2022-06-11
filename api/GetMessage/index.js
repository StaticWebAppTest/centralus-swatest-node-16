module.exports = async function (context, req) {
  const date = "2022-06-11T20:10:50.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

