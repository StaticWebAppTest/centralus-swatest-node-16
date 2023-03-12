module.exports = async function (context, req) {
  const date = "2023-03-12T07:08:17.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

