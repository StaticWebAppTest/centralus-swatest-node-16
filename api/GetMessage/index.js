module.exports = async function (context, req) {
  const date = "2022-03-11T08:12:27.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

