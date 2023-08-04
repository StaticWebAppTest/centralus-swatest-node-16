module.exports = async function (context, req) {
  const date = "2023-08-04T21:07:08.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

