module.exports = async function (context, req) {
  const date = "2022-10-10T23:14:43.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

