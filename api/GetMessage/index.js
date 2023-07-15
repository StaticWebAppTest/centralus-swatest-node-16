module.exports = async function (context, req) {
  const date = "2023-07-15T21:08:10.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

