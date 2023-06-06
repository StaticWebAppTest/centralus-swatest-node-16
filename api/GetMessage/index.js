module.exports = async function (context, req) {
  const date = "2023-06-06T23:08:18.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

