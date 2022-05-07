module.exports = async function (context, req) {
  const date = "2022-05-07T23:10:54.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

