module.exports = async function (context, req) {
  const date = "2022-11-11T18:14:45.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

