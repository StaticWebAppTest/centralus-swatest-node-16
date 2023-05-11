module.exports = async function (context, req) {
  const date = "2023-05-11T06:11:49.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

