module.exports = async function (context, req) {
  const date = "2022-05-25T17:19:49.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

