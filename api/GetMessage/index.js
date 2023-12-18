module.exports = async function (context, req) {
  const date = "2023-12-18T07:09:25.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

