module.exports = async function (context, req) {
  const date = "2023-02-18T10:09:30.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

