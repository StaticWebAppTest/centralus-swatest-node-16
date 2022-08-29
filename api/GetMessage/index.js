module.exports = async function (context, req) {
  const date = "2022-08-29T21:10:37.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

