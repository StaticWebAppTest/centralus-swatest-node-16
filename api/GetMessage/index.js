module.exports = async function (context, req) {
  const date = "2022-07-23T20:11:08.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

