module.exports = async function (context, req) {
  const date = "2023-12-11T18:12:03.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

