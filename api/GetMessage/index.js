module.exports = async function (context, req) {
  const date = "2022-12-29T13:14:01.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

