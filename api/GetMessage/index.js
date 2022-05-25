module.exports = async function (context, req) {
  const date = "2022-05-25T06:14:45.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

