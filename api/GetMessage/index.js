module.exports = async function (context, req) {
  const date = "2022-08-13T21:09:13.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

