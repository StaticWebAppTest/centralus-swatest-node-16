module.exports = async function (context, req) {
  const date = "2022-11-11T21:10:56.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

