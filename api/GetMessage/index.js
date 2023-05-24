module.exports = async function (context, req) {
  const date = "2023-05-24T07:08:21.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

