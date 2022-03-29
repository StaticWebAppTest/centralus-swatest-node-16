module.exports = async function (context, req) {
  const date = "2022-03-29T14:12:08.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

