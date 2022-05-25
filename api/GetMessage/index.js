module.exports = async function (context, req) {
  const date = "2022-05-25T07:11:11.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

