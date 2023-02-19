module.exports = async function (context, req) {
  const date = "2023-02-19T06:12:07.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

