module.exports = async function (context, req) {
  const date = "2023-10-11T10:09:43.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

