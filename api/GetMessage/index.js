module.exports = async function (context, req) {
  const date = "2022-05-25T12:23:23.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

