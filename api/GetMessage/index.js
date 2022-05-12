module.exports = async function (context, req) {
  const date = "2022-05-12T13:37:53.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

