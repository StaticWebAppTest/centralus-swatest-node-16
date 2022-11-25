module.exports = async function (context, req) {
  const date = "2022-11-25T17:09:03.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

