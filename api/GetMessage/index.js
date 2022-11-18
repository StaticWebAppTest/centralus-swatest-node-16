module.exports = async function (context, req) {
  const date = "2022-11-18T09:10:54.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

