module.exports = async function (context, req) {
  const date = "2022-03-12T23:09:37.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

