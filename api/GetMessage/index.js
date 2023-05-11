module.exports = async function (context, req) {
  const date = "2023-05-11T12:17:08.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

