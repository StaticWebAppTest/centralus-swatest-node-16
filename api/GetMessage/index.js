module.exports = async function (context, req) {
  const date = "2023-05-06T06:10:46.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

