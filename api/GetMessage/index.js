module.exports = async function (context, req) {
  const date = "2022-06-25T18:13:03.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

