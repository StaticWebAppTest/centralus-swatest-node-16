module.exports = async function (context, req) {
  const date = "2022-07-21T23:11:56.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

