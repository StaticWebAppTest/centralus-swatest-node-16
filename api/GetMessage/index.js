module.exports = async function (context, req) {
  const date = "2022-08-11T19:07:44.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

