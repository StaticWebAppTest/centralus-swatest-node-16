module.exports = async function (context, req) {
  const date = "2023-03-11T21:07:50.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

