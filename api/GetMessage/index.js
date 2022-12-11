module.exports = async function (context, req) {
  const date = "2022-12-11T23:09:22.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

