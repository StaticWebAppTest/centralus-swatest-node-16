module.exports = async function (context, req) {
  const date = "2022-07-13T05:15:27.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

