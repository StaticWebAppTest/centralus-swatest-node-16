module.exports = async function (context, req) {
  const date = "2022-09-28T21:11:57.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

