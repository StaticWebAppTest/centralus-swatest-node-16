module.exports = async function (context, req) {
  const date = "2023-12-11T21:08:30.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

