module.exports = async function (context, req) {
  const date = "2022-11-07T15:11:57.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

