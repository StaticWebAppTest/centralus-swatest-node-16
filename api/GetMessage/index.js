module.exports = async function (context, req) {
  const date = "2022-09-05T09:12:12.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

