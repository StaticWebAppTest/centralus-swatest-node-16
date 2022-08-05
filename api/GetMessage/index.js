module.exports = async function (context, req) {
  const date = "2022-08-05T08:14:25.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

