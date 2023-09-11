module.exports = async function (context, req) {
  const date = "2023-09-11T12:16:39.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

